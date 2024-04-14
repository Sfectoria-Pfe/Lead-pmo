import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddModal = ({ isOpen, onClose, handleAddTask }) => {
    const initialTaskData = {
        id: uuidv4(),
        title: "",
        description: "",
        priority: "",
        deadline: 0,
        image: "",
        alt: "",
        tags: [],
    };

    const [taskData, setTaskData] = useState(initialTaskData);
    const [tagTitle, setTagTitle] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData({ ...taskData, [name]: value });
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                if (e.target) {
                    setTaskData({ ...taskData, image: e.target.result });
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleAddTag = () => {
        if (tagTitle.trim() !== "") {
            const newTag = { title: tagTitle.trim() };
            setTaskData({ ...taskData, tags: [...taskData.tags, newTag] });
            setTagTitle("");
        }
    };

    const handleSubmit = () => {
        handleAddTask(taskData);
        onClose();
        setTaskData(initialTaskData);
    };

    return (
        <div className={`modal ${isOpen ? "open" : "closed"}`}>
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="modal-content">
                <h2>Add Task</h2>
                <input
                    type="text"
                    name="title"
                    value={taskData.title}
                    onChange={handleChange}
                    placeholder="Title"
                />
                <input
                    type="text"
                    name="description"
                    value={taskData.description}
                    onChange={handleChange}
                    placeholder="Description"
                />
                <select
                    name="priority"
                    value={taskData.priority}
                    onChange={handleChange}
                >
                    <option value="">Priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <input
                    type="number"
                    name="deadline"
                    value={taskData.deadline}
                    onChange={handleChange}
                    placeholder="Deadline"
                />
                <input
                    type="text"
                    value={tagTitle}
                    onChange={(e) => setTagTitle(e.target.value)}
                    placeholder="Tag Title"
                />
                <button onClick={handleAddTag}>Add Tag</button>
                <div>
                    {taskData.tags && <span>Tags:</span>}
                    {taskData.tags.map((tag, index) => (
                        <div key={index} className="tag">
                            {tag.title}
                        </div>
                    ))}
                </div>
                <input
                    type="text"
                    name="alt"
                    value={taskData.alt}
                    onChange={handleChange}
                    placeholder="Image Alt"
                />
                <input
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                />
                <button onClick={handleSubmit}>Submit Task</button>
            </div>
        </div>
    );
};

export default AddModal;
