export const bgColorGradient = (type1, type2, length) => {

    let color1, color2

    switch(type1)
    {
        case "grass":
            color1 = "#82C274";
            break;
        case "water":
            color1 = "#74ACF5";
            break;
        case "fire":
            color1 = "#EF7374";
            break;
        case "electric":
            color1 = "#FCD659";
            break;
        case "poison":
            color1 = "#B884DD";
            break;
        case "flying":
            color1 = "#ADD2F5";
            break;
        case "normal":
            color1 = "#C1C2C1";
            break;
        case "ground":
            color1 = "#B88E6F";
            break;
        case "rock":
            color1 = "#CBC7AD";
            break;
        case "psychic":
            color1 = "#F584A8";
            break;
        case "ghost":
            color1 = "#A284A2";
            break;
        case "dark":
            color1 = "#998B8C";
            break;
        case "dragon":
            color1 = "#8D98EC";
            break;
        case "fairy":
            color1 = "#F5A2F5";
            break;
        case "ice":
            color1 = "#81DFF7";
            break;
        case "steel":
            color1 = "#98C2D1";
            break;
        case "bug":
            color1 = "#B8C26A";
            break;
        case "fighting":
            color1 = "#FFAC59";
            break;
        default: 
            color1 = "gray";
            break;
    }

    if(length === 2)
    {
        switch(type2)
        {
            case "grass":
                color2 = "#82C274";
                break;
            case "water":
                color2 = "#74ACF5";
                break;
            case "fire":
                color2 = "#EF7374";
                break;
            case "electric":
                color2 = "#FCD659";
                break;
            case "poison":
                color2 = "#B884DD";
                break;
            case "flying":
                color2 = "#ADD2F5";
                break;
            case "normal":
                color2 = "#C1C2C1";
                break;
            case "ground":
                color2 = "#B88E6F";
                break;
            case "rock":
                color2 = "#CBC7AD";
                break;
            case "psychic":
                color2 = "#F584A8";
                break;
            case "ghost":
                color2 = "#A284A2";
                break;
            case "dark":
                color2 = "#998B8C";
                break;
            case "dragon":
                color2 = "#8D98EC";
                break;
            case "fairy":
                color2 = "#F5A2F5";
                break;
            case "ice":
                color2 = "#81DFF7";
                break;
            case "steel":
                color2 = "#98C2D1";
                break;
            case "bug":
                color2 = "#B8C26A";
                break;
            case "fighting":
                color2 = "#FFAC59";
                break;
            default: 
                color2 = "gray";
                break;
        }
    }

    else if(length === 1)
    {
        color2 = color1;
    }

    const result = [color1, color2];

    return result;
}