/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Pool, PoolConfig } from "pg";

import { db_config } from "../../dbConfig";

const pool = new Pool(db_config as PoolConfig);

async function query(query: string, params: any) {
  const { rows } = await pool.query(query, params);

  return rows;
}

export = {
  query,
};
