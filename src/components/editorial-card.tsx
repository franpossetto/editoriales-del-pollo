import { Divider } from 'antd';
import React from 'react'
import { IEditorial } from '../types/IEditorial';

export const EditorialCard = (  data : IEditorial ) => {
    return(
        <>
        <div style= {{ paddingBottom: '20px' }}>
            <h3 style = {{ marginBottom: '0px', color: 'grey', fontFamily: 'Helvetica Neue' }}> { data.tags } </h3>
            <h1 style = {{ fontWeight: '700', letterSpacing: '0px', fontSize: '24px' }}> { data.title } </h1>
            <p style = {{ fontSize: '16px', lineHeight: '24px' }}> { data.editorial }</p>
        </div>
        <Divider/>
        </>
    );
}