import { Divider } from 'antd';
import React from 'react'

export const EditorialCard = () => {

    return(
        <>
        <div style= {{ paddingBottom: '20px' }}>
            <h3 style = {{ marginBottom: '0px', color: 'grey', fontFamily: 'Helvetica Neue' }}> #gallardo #river </h3>
            <h1 style = {{ fontWeight: '700', letterSpacing: '0px', fontSize: '24px' }}> La final mas importante del mundo </h1>
            <p style = {{ fontSize: '16px', lineHeight: '24px' }}> -description will be here and must to have at description will be here and must to have at description will be here and must to have at least 3 lines like this one.</p>
        </div>
        <Divider/>
        
        </>
    );

}