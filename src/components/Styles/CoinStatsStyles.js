import styled from 'styled-components'

export const CoinStatsStyles = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  .container{
    width:85%;
    .head{
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      text-align:center;
      h2{
        color:${props=>props.colors[5]};
      }
      span{
        color:${props=>props.colors[1]};
      }
      
    }
    .coininfo{
      display:flex;
      justify-content:space-between;
      align-items:center;
      flex-direction:row;
      color:${props=>props.colors[1]};
      width:100%;
      .valuestats{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        h3{
          text-align:center;
        }
        width:40%;
        .info{
          display:flex;
          justify-content:center;
          
          flex-direction:column;
          width:100%;
          .price{
            display:flex;
            justify-content:space-between;
            align-items:center;
            flex-direction:row;
            border-bottom:1px solid silver;
            .data{
              font-weight:bold;
            }
            .label{
              display:flex;
              justify-content:space-between;
              align-items:center;
              flex-direction:row;
              p{
                margin-left:5px;
              }
            }
          }
          .rank{
            display:flex;
            justify-content:space-between;
            align-items:center;
            flex-direction:row;
            border-bottom:1px solid silver;
            .data{
              font-weight:bold;
            }
            .label{
              display:flex;
              justify-content:space-between;
              align-items:center;
              flex-direction:row;
              p{
                margin-left:5px;
              }
            }
          }
          .volume{
            display:flex;
            justify-content:space-between;
            align-items:center;
            flex-direction:row;
            border-bottom:1px solid silver;
            .data{
              font-weight:bold;
            }
            .label{
              display:flex;
              justify-content:space-between;
              align-items:center;
              flex-direction:row;
              p{
                margin-left:5px;
              }
            }
          }
          .mkt{
            display:flex;
            justify-content:space-between;
            align-items:center;
            flex-direction:row;
            border-bottom:1px solid silver;
            .data{
              font-weight:bold;
            }
            .label{
              display:flex;
              justify-content:space-between;
              align-items:center;
              flex-direction:row;
              p{
                margin-left:5px;
              }
            }
          }
          .high{
            display:flex;
            justify-content:space-between;
            align-items:center;
            flex-direction:row;
            border-bottom:1px solid silver;
            .data{
              font-weight:bold;
            }
            .label{
              display:flex;
              justify-content:space-between;
              align-items:center;
              flex-direction:row;
              p{
                margin-left:5px;
              }
            }
          }
        }
      }
      .other-stats{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        
        width:40%;
        .info{
          display:flex;
          justify-content:center;
          
          flex-direction:column;
          width:100%;
          .mktsNum{
            display:flex;
            justify-content:space-between;
            align-items:center;
            flex-direction:row;
            border-bottom:1px solid silver;
            .data{
              font-weight:bold;
            }
            .label{
              display:flex;
              justify-content:space-between;
              align-items:center;
              flex-direction:row;
              p{
                margin-left:5px;
              }
            }
          }
          .exchanges{
            display:flex;
            justify-content:space-between;
            align-items:center;
            flex-direction:row;
            border-bottom:1px solid silver;
            .data{
              font-weight:bold;
            }
            .label{
              display:flex;
              justify-content:space-between;
              align-items:center;
              flex-direction:row;
              p{
                margin-left:5px;
              }
            }
          }
          .totalSupply{
            display:flex;
            justify-content:space-between;
            align-items:center;
            flex-direction:row;
            border-bottom:1px solid silver;
            .data{
              font-weight:bold;
            }
            .label{
              display:flex;
              justify-content:space-between;
              align-items:center;
              flex-direction:row;
              p{
                margin-left:5px;
              }
            }
          }
          .circulating{
            display:flex;
            justify-content:space-between;
            align-items:center;
            flex-direction:row;
            border-bottom:1px solid silver;
            .data{
              font-weight:bold;
            }
            .label{
              display:flex;
              justify-content:space-between;
              align-items:center;
              flex-direction:row;
              p{
                margin-left:5px;
              }
            }
          }
          .approved{
            display:flex;
            justify-content:space-between;
            align-items:center;
            flex-direction:row;
            border-bottom:1px solid silver;
            .data{
              font-weight:bold;
            }
            .label{
              display:flex;
              justify-content:space-between;
              align-items:center;
              flex-direction:row;
              
              p{
                margin-left:5px;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width:760px){
    .container{
      .coininfo{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        .valuestats{
          width:90%;
        }
        .other-stats{
          width: 90%;
        }
      }
    }
  }
  @media (max-width:400px){
    .container{
      .coininfo{
        .valuestats{
          width:95%;
        }
        .other-stats{
          width:95%;
        }
      }
    }
  }
`