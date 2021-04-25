/* eslint-disable @typescript-eslint/no-unsafe-return */
export function getOffset(currentPage = 1, listPerPage: number) {
    const currentPageMinusOne = currentPage - 1;
    return currentPageMinusOne * listPerPage;
}

export function emptyOrRows(rows: any[]) {
    if (!rows) {
        return [];
    }

    return rows;
}
