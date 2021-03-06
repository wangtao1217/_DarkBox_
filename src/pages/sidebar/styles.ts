import styled from 'styled-components'


const sider_css = {
    padding: 12,
    width: 220,
    item_space: 7
}

const Wrapper = styled.section`
    height: 100vh;
    width: ${sider_css.width}px;
    color: ${props => props.theme.text.secondary};
    background-color: ${props => props.theme.bgc.primary};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 30px 15px 0 15px ;
    h1{
        margin:0;
        padding:0;
    }
`
export { Wrapper, sider_css }