import React from 'react'
import Link from "next/link";
import { useRouter } from "next/router";

const factoryList = () => {
    
    const router = useRouter();
    console.log(router);

    return (
    <div>
        <Link href="/">Move to '/’</Link>
    </div>
    )
}

export default factoryList
