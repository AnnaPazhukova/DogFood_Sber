import s from './style.module.css';
import {Layout, Slider, Typography } from "antd";
import {Table} from "../table-ant";
import { useState } from 'react';
const { Header, Footer, Content } = Layout;


export const AntApp = () => {

    const[rows,setRows] = useState(10)

    return (
        <Layout>
            <Header className={s.header}>Header</Header>
            <Content>
                <Slider min={1} max={100} defaultValue={rows} onChange={setRows}/>
                <Typography.Title level={1}> Количество строк: {rowsnp}</Typography.Title>
                <Table rows={rows}/>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    )
}