export default ({
    weight,
    lines,
    columns
}) => {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('width', weight*columns)
    canvas.setAttribute('height', weight*lines)
    const ctx = canvas.getContext('2d')
    
    function writePixel(x, y) {
        const offset = (multiplier) =>
            (weight - weight*multiplier)/2;
        ctx.fillStyle = "#000";
        ctx.fillRect(
            x*weight,
            y*weight,
            weight,
            weight,
        );

        ctx.fillStyle = "#CCC";
        ctx.fillRect(
            x*weight + offset(0.9),
            y*weight + offset(0.9),
            weight*0.9,
            weight*0.9,
        );

        ctx.fillStyle = "#000";
        ctx.fillRect(
            x*weight + offset(0.7),
            y*weight + offset(0.7),
            weight*0.7,
            weight*0.7
        );
    }

    function mount(elementId) {
       const target = document.getElementById(elementId);
       if (target) {
        target.appendChild(canvas)
       }
    }

    function erasePixel(x, y) {
        ctx.clearRect(
            x*weight,
            y*weight,
            weight,
            weight,
        );
    }
    return {
        writePixel,
        erasePixel,
        mount,
    }
}