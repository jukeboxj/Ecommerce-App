const rates = {
    NL: 'txr_1J2RhiAHdwvoELa86VIATDHP',
    PE: 'txr_1J2RjjAHdwvoELa8ZtTpLwdm',
    NS: 'txr_1J2RjAAHdwvoELa84Txjs0C2',
    NB: 'txr_1J2RhWAHdwvoELa8IftUX2qQ',
    QC: 'txr_1J2RkRAHdwvoELa8W4OLe8mC',
    ON: 'txr_1J1OkaAHdwvoELa8DnXutTrG',
    MB: 'txr_1J2RhGAHdwvoELa8QryyxOej',
    SK: 'txr_1J2RkcAHdwvoELa883PzfD3H',
    AB: 'txr_1J2Rg4AHdwvoELa84JoEMsWz',
    BC: 'txr_1J2Rh5AHdwvoELa85AuItLDj',
    YT: 'txr_1J2RkkAHdwvoELa8x40Xo8W2',
    NT: 'txr_1J2Ri0AHdwvoELa8BGSEWkXO',
    NU: 'txr_1J2RjPAHdwvoELa8BUmaJrna',
}

const taxRate = region => {
    return rates[region]
}

export default taxRate
