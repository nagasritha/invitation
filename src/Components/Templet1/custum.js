import styled from "styled-components";

export const Form = styled.form`
            display:${(props)=>(props.status?"flex":"none")};
            background-color:white;
            flex-direction:column;
            padding:20px;
            border-radius:10px;
            @media(min-width:800px){
                display:"flex"
            }
            `;

export const Templet= styled.div`
background-image:url(${(props)=>(props.url)});
background-size:cover;
    text-align:center;
    width:100vw;
    height:80vh;
`

export const Heading = styled.h1`
                    
                    text-align:center;
                    font-size:${(props)=>props.size}px;
                    color:${(props)=>props.color};
                    position:relative;
                    left:50%;
                    transform: translate(-50%, -50%) rotate(${(props)=>(props.angle)}deg);
                    font-family:${(props)=>(props.font)}
                   
                    `;

                   