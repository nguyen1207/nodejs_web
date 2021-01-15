const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        level: { type: String },
        image: { type: String },
        videoID: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

const mongoose_delete = require('mongoose-delete');
Course.plugin(mongoose_delete, { overrideMethods: 'all' });
Course.plugin(mongoose_delete, { deletedAt: true });

module.exports = mongoose.model('Course', Course);
