import styled from "styled-components";

export const SidebarStyles = styled.div`
  display:flex;
  flex-direction:column;
  width:20vw;
  max-width:300px;
  height:auto;
  background:#080857;
  
  .logo{
    display:flex ;
    flex-direction:row;
    margin-bottom:40px;
    align-items:center;
    img{
      height:80px;
      width:100px;
      border-radius:10px;
      margin:5px;
      border:2px solid white;
    }
    h3{
      color:white;
      span{
        color:gold;
      }
    }
  }
  .links{
    .toggle{
      display:flex;
      justify-content:center;
      flex-direction:column;
      .select{
        display:flex;
        justify-content:center;
        flex-direction:column;
        align-items:center;
      }
      .shown{
        display:flex;
        color:white;
        padding:10px;
        align-items:center;
        justify-content:start;
        span{
          margin-left:5px;
          font-size:17px;
        }
        &:hover{
          cursor:pointer;
          background: #6769e6;
        }
      }
    }
    .predict{
      display:flex;
      justify-content:center;
      flex-direction:column;
      .select{
        display:flex;
        justify-content:center;
        flex-direction:column;
        align-items:center;
      }
      .shown{
        display:flex;
        color:white;
        padding:10px;
        align-items:center;
        justify-content:start;
        span{
          margin-left:5px;
          font-size:17px;
        }
        &:hover{
          cursor:pointer;
          background: #6769e6;
        }
      }
    }
    .link{
      display:flex;
      color:white;
      padding:10px;
      align-items:center;
      justify-content:start;
      span{
        margin-left:5px;
        font-size:17px;
      }
      &:hover{
        cursor:pointer;
        background: #6769e6;
      }
    }
  }
  @media (max-width:1250px){
    .logo{
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
    }
  }
`