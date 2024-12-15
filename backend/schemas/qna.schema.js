import mongoose from "mongoose";

const qnaSchema = new mongoose.Schema({
  questionTitle: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
    validate: [arrLimit, "{PATH} exceeds the limit of 10"],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "approved", "rejected"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

function arrLimit (val) {
    return val.length <= 10;
}

const QnA = mongoose.model("QnA", qnaSchema);

export default QnA;