import React from "react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

 
export default function ListaProduto(){
 
    const [produto,setProduto] = useState([]);
 
    useEffect(()=>{
        fetch('http://localhost:8080/appRWD/rest/produto/').then((resp)=>{
            return resp.json();
        }).then((resp)=>{
            setProduto(resp);
            console.log(resp);
        }).catch((error)=>{
            console.log(error);
        })
    },[])
 
    return(
        <>
            <h1>Lista Produtos</h1>
            <Link to="/incluir">Inserir o Produto</Link>
            <table>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th colSpan="2">Ação</th>
                    </tr>
                    <tbody>
                        <tr key={produto.codigo}>
                            <td>{produto.titulo} </td>
                            <td><a href="#"></a></td>
                            <td><a href="#"></a></td>
                        </tr>
                    </tbody>
                </thead>
            </table>
        </>
    )
}


