import React from "react";
 
export default function FormProduto(){
    return(
        <>
            <h1>Form Produto</h1>
            <form>
                <label htmlFor="txtProduto">Produto: </label>
                <br/>
                <input type="text" name="txtProduto" id="txtProduto" />
                <br/>
                <label htmlFor="txtQt">Quantidade: </label>
                <br/>
                <input type="number" name="txtQt" id="txtQt" />
                <br/>
                <label htmlFor="txtPreco">Preço: </label>
                <br/>
                <input type="number" name="txtPreco" id="txtPreco" step="0.01" />
                <br/>
                <button type="submit">Gravar</button>
            </form>
        </>
    )
}