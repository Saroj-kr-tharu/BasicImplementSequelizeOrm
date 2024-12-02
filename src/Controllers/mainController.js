

const writeDBControllers = (req, res) => {
    try {
        const data = req.body.data;
        // console.log(data);

        return res.status(201).json({
            message:'Successfully to write data in DB',
            success: true,
            data: data,
            err: {}
        });
        

    } catch (error) {
        console.log('Something went wrong in controller level (writeDB)');
        return res.status(500).json({
            message:'Failed to write data in DB',
            success: false,
            data: {},
            err: {}
        });
    }
}

module.exports= {
    writeDBControllers
}

