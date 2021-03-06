import React from 'react'
import './AddForm.scss'


function AddForm() {
    return (
        <form className="add-form">
            <div className="add-form__row">
                <h4>
                    <label for="title">Title</label>
                </h4>
                <input
                    type="email"
                    className="form-control"
                    id="title"
                    placeholder="Enter email"
                />
            </div>

            <div className="add-form__row">
                <h4>
                    <label for="image">Image URL</label>
                </h4>
                <input
                    type="text"
                    className="form-control"
                    id="image"
                    placeholder="Enter image URL"
                />
            </div>

            <div className="add-form__row">
                <h4>
                    <label for="description">Description</label>
                </h4>
                <textarea
                    row="10"
                    className="form-control"
                    id="description"
                    placeholder="Enter text"
                />
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}

export default AddForm
