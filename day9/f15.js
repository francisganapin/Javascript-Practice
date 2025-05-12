const ACCESS = {
    GYM:1,
    SWIMMING:2,
    SAUNA:4
}

const memberAccess = ACCESS.GYM | ACCESS.SAUNA;

const hasSauna = (memberAccess & ACCESS.SAUNA) !== 0;

console.log(hasSauna);