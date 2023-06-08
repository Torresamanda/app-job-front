import React, { useEffect, useState } from "react";

import styled from "styled-components";

export default function Message({ msg, color, backgroud, border }) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!msg) {
            setVisible(false)
            return
        }
        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer)

    }, [msg])

    return (
        <>
            {visible && (
                <Mensagem
                    color={color}
                    backgroud={backgroud}
                    border={border}
                >
                    {msg}
                </Mensagem>
            )}
        </>
    )
}

const Mensagem = styled.div`
    width: 95%;
    padding: 1em;
    border: 1px solid #000;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 2em;
    border-radius: 5px;

    color: ${(props) => props.color ? props.color : '#155724'};
    background-color: ${(props) => props.backgroud ? props.backgroud : '#D4EDDA'};
    border-color: ${(props) => props.border ? props.border : '#C3E6CB'};
`