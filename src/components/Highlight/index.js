import { Grid } from '@material-ui/core';
import React from 'react';
import HighlightCart from './HighlightCart';

export default function Highlight({ report }) {
    const data = report && report.length ? report[report.length - 1] : [];
    const summary = [
        {
            title: 'Số ca nhiễm',
            count: data.Confirmed,
            type: 'confirmed'
        },
        {
            title: 'Số ca khỏi',
            count: data.Recovered,
            type: 'recovered'
        },
        {
            title: 'Số ca tử vong',
            count: data.Deaths,
            type: 'death'
        }
    ];
    return (
        <Grid container spacing={3}>
            {
                summary.map(item => (
                    <Grid key={item.type} item sm={4} xs={12}>
                        <HighlightCart title={item.title} count={item.count} type={item.type} />
                    </Grid>
                ))
            }
        </Grid>
    );
}