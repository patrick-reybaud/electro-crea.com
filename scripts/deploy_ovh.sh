#!/usr/bin/env bash
# Construit le site et l'envoie sur l'hébergement OVH par SFTP (lftp).
# Usage : scripts/deploy_ovh.sh [--dry-run]
# Paramètres dans .env.deploy (non versionné, voir .env.deploy.example)
# ou dans l'environnement (GitHub Actions).
set -euo pipefail
cd "$(dirname "$0")/.."

if [ -f .env.deploy ]; then
  # shellcheck disable=SC1091
  source .env.deploy
fi
: "${FTP_HOST:?}" "${FTP_USER:?}" "${FTP_PASSWORD:?}" "${FTP_REMOTE_DIR:?}"

# Garde-fou : l'hébergement sert aussi ondulab.com (www/) et Dolibarr (www/admin/).
# Le miroir avec --delete ne doit viser que le dossier dédié à electro-crea.com.
case "${FTP_REMOTE_DIR%/}" in
  "" | "/" | "." | www | /www | www/* | /www/*)
    echo "FTP_REMOTE_DIR=$FTP_REMOTE_DIR refusé : choisir un dossier dédié (ex. electro-crea)." >&2
    exit 1 ;;
esac

DRY=""
[ "${1:-}" = "--dry-run" ] && DRY="--dry-run"

npm run build

# --delete retire du serveur ce qui n'existe plus dans dist/ ; seul FTP_REMOTE_DIR est concerné.
# SFTP (chiffré) : l'hébergement OVH refuse le FTP sur TLS, et le FTP simple fait passer le mot de passe en clair.
# Mot de passe passé par l'environnement : n'apparaît pas dans la liste des processus.
LFTP_PASSWORD="$FTP_PASSWORD" lftp --env-password -u "$FTP_USER" "sftp://$FTP_HOST" <<EOF
set sftp:auto-confirm yes
set net:max-retries 2
mirror --reverse --delete --verbose --parallel=4 --exclude-glob .DS_Store $DRY dist/ "$FTP_REMOTE_DIR"
bye
EOF

echo "Publié dans $FTP_REMOTE_DIR"
