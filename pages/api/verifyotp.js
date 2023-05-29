"use client"

import validateToken from "../../Database/validateToken";

export default async function handler(req,res){

    let vefiiriedTOken = validateToken();

    const {requestToken} = vefiiriedTOken;
    console.log(requestToken)
}