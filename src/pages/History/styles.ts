import styled from "styled-components";

export  const HistoryContainer = styled.main`
    flex: 1;
    padding: 3.5rem;
    
    display: flex;
    flex-direction: column;
    
    h1 {
        font-size: 1.5rem;
        color: ${({ theme }) => theme['gray-100']}
    }
`

export const HistoryList = styled.div`
    flex: 1;
    overflow: auto;
    margin-top: 2rem;
    
    table {
        width: 100%;
        border-spacing: 0;
        border-collapse: collapse;
        
        min-width: 600px;
        
        th {
            background: ${({ theme }) => theme['gray-600']};
            padding: 1rem;
            text-align: left;
            color: ${({ theme }) => theme['gray-100']};
            font-size: 0.875rem;
            line-height: 1.6;
        }
        
        &:first-child {
            border-top-left-radius: 8px;
            padding-left: 1.5rem;
        }
        
        &:last-child {
            border-bottom-right-radius: 8px;
            pading-right: 1.5rem;
            
        }
        
        td {
            background: ${({ theme }) => theme['gray-700']};
            border-top: 1px solid ${({ theme }) => theme['gray-800']};
            padding: 1rem;
            font-size: 0.875rem;
            line-height: 1.6;
            


            &:first-child {
                width: 40%;
                border-top-left-radius: 8px;
                padding-left: 1.5rem;
            }

            &:last-child {
                border-bottom-right-radius: 8px;
                pading-right: 1.5rem;
            }
        }
    }
`