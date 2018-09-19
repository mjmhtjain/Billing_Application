const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ItemListModel = require('./ItemListModel');

const BillHistorySchema = new Schema({
    Customer_Name: { type: String, required: true },
    Date: { type: Date, default: Date.now() },
    Item_List: [ItemListModel]
}, {collection : 'Bill_History_List'});

var BillHistoryModel = mongoose.model('Bill_History_List', BillHistorySchema);

var func_fetchBillHistory = function (callback) {
    BillHistoryModel.find({}, callback);
}

var ObjectModelTemplate = {
    model: BillHistoryModel,
    queries: {
        fetchBillHistory: func_fetchBillHistory
    }
}

module.exports = ObjectModelTemplate;
// module.exports.fetchBillHistory = fetchBillHistory;