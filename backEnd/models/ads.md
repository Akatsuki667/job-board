## getAllAdvertisements
Récupération de toutes les offres.

### import pool from "../config/database";
- `pool` : objet de connexion.

### const result = await pool.query(sql);
`pool.query(sql)` : envoie requête sql à `PostgreSQl`.

### const result = await pool.query(sql);
ce que contient `result` :

```javascript
{
  rows: [
    { id: 2, titre: "Designer UX", description: "...", created_at: "2025-10-07" },
    { id: 1, titre: "Dev React", description: "...", created_at: "2025-10-06" }
  ],
  rowCount: 2,
  command: "SELECT",
  // ... autres métadonnées
}
```