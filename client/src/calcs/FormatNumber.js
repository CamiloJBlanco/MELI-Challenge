
export const formatNumber = (x) => {
    var x_temp = x.toString().split(".");
    x_temp[0] = x_temp[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return x_temp.join(".");
};

