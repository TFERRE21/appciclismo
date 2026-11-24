# Pedal Brasil

Ecossistema brasileiro de ciclismo. Projeto em desenvolvimento; aplicativo ainda não disponível.

Consulte [ROADMAP](ROADMAP.md) para os 55 módulos. A arquitetura prevista utiliza Expo, Next.js, Node.js, PostgreSQL/PostGIS, Redis/BullMQ, MapLibre e FFmpeg.

## Primeira base executável
Execute `docker compose up --build` e consulte `http://localhost:8080/health`. Este endpoint verifica apenas o processo HTTP; não comprova banco, GPS ou outros módulos.

## Segurança
Localização privada por padrão, consentimento revogável, sem promessas de resgate. Nenhuma integração externa é considerada ativa sem configuração e teste. Não exponha portas de banco ou segredos.
