import mongoose from "mongoose";

const storySchema = new mongoose.Schema({
    user: {type: String, ref: 'User', require: 'true'},
    content: {type: String },
    media_url: {type: String },
    post_type: {type: String, enum: ['text', 'image', 'video']},
    likes_count: [{ type: String, ref: 'User', require: true }],
    background_color: { type: String },
}, {timestamps: true, minimize: false})

const Story = mongoose.model('Story', storySchema)

export default Story;