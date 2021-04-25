import db from "./db";
import { emptyOrRows, getOffset } from "src/utils/helper";
import { config } from "src/constants/config";
import { hunterCreateType, hunterUpdateType } from "src/types/hunter.type";

async function getMultiple(page = 1) {
    const offset = getOffset(page, config.listPerPage);
    const rows = await db.query("SELECT * FROM Hunter OFFSET $1 LIMIT $2", [
        offset,
        config.listPerPage,
    ]);
    const data = emptyOrRows(rows);
    const meta = { page };

    return {
        data,
        meta,
    };
}

async function create(hunter: hunterCreateType) {
    const result = await db.query(
        "INSERT INTO Hunter(name, gender, power) VALUES ($1, $2, $3) RETURNING *",
        [hunter.name, hunter.gender, hunter.power]
    );

    let message = "Error in creating Hunter";

    if (result.length) {
        message = "Hunter created successfully";
    }

    return { message, result };
}

async function update(hunter: hunterUpdateType) {
    const result = await db.query(
        "UPDATE Hunter SET name = $1, gender = $2, power = $3 WHERE id = $4 RETURNING *",
        [hunter.name, hunter.gender, hunter.power, hunter.id]
    );

    let message = "Error in creating Hunter";

    if (result.length) {
        message = "Hunter updated successfully";
    }

    return { message, result };
}

async function deleteOne(id: number) {
    const result = await db.query(
        "DELETE FROM Hunter WHERE id = $1 RETURNING *",
        [id]
    );

    let message = "Error in creating Hunter";

    if (result.length) {
        message = "Hunter deleted successfully";
    }

    return { message, result };
}

export = {
    getMultiple,
    create,
    update,
    deleteOne,
};
