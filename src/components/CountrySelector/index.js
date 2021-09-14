import React from 'react';
import { FormControl, FormHelperText, InputLabel, makeStyles, NativeSelect } from '@material-ui/core';

const useStyle = makeStyles((theme) =>({
    formControl: {
        margin: `${theme.spacing(3)}px 0`
    }
}));

export default function CountrySelector({ value, handleOnChange, countries }) {
    const styles = useStyle();
    return (
        <FormControl className={styles.formControl}>
            <InputLabel htmlFor="country-selector" shrink>Quốc gia</InputLabel>
            <NativeSelect value={value}
                onChange={handleOnChange}
                inputProps={{ name: 'country', id: 'country-selector' }}>
                {countries.map((country) => {
                    return <option key={country.ISO2} value={country.ISO2.toLowerCase()}>{country.Country}</option>
                })}
            </NativeSelect>
            <FormHelperText>Lựa chọn quốc gia</FormHelperText>
        </FormControl>
    );
}