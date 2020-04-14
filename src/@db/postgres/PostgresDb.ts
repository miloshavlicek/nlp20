import { Pool } from "pg";

export class PostgresDb {
  private static pool?: Pool;

  public static getPool() {
    if (PostgresDb.pool) {
      return PostgresDb.pool;
    }

    return (PostgresDb.pool = new Pool({
      host: process.env.NLP20_POSTGRESQL_1_HOST,
      port: parseInt(process.env.NLP20_POSTGRESQL_1_PORT, 10),
      user: process.env.NLP20_POSTGRESQL_1_USER,
      password: process.env.NLP20_POSTGRESQL_1_PSW,
      database: process.env.NLP20_POSTGRESQL_1_DB,
      ssl: {
        rejectUnauthorized: false,
      },
    }));
  }
}
