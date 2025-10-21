import React from "react";

function ProductCatergoryRow({categoria}) {
    return(
        <tr>
            <th colSpan={2}>
                {categoria}
            </th>
        </tr>
    );
}

export default ProductCatergoryRow;