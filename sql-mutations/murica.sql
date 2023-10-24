UPDATE "countries"
      SET "name" = 'Murica'
      WHERE "name" = 'America'
      RETURNING *;
