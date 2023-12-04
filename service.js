const dbService = require('./db.service')
const DB_NAME = "OrderaInfo"


async function getData() {
    try {
        // const criteria = _buildCriteria(filterBy)
        const collection = await dbService.getCollection(DB_NAME)
        console.log(collection)
        const data = await collection.find().toArray()
        // console.log(stories)
        return data
    } catch (err) {
        console.log('cannot find stories', err)
        throw err
    }
}

async function add(infoDatatoSend) {
    try {
        console.log('DATATOSEND',infoDatatoSend)
        const collection = await dbService.getCollection(DB_NAME)
        await collection.insertOne(infoDatatoSend)
        return 'GOOD!'
    } catch (err) {
        console.log('cannot insert story', err)
        throw err
    }
}


module.exports = {
    getData,
    add
}