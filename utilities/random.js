module.exports = {
    generateRandomText: function(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    },

    generateRandomNumber: function(min, max) {
        // Adjust min and max to ensure minimum value is 1
        const adjustedMin = min > 1 ? min : 1;
        const adjustedMax = max >= adjustedMin ? max : adjustedMin;

        return Math.floor(Math.random() * (adjustedMax - adjustedMin + 1)) + adjustedMin;
    }
};