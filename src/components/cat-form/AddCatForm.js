import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postCategoriesAction } from "../../pages/categories/categoryAction";

// For mobile response

const AddCatForm = () => {
  const dispatch = useDispatch();
  const initialState = {
    status: "inactive",
    name: "",
    parentId: null,
  };
  const [form, setForm] = useState(initialState);
  const { categories } = useSelector((state) => state.category);
  console.log(categories);
  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;
    if (name === "status") {
      value = checked ? "active" : "inactive";
    }
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(postCategoriesAction(form));
  };

  return (
    <Form
      className="py-4 mb-5 border p-3 shadow rounded"
      onSubmit={handleOnSubmit}
    >
      <h4 className="mb-3">Add new Category</h4>
      <Row className="g-2">
        <Col md="2">
          <Form.Group>
            <Form.Check
              name="status"
              label="status"
              type="switch"
              onChange={handleOnChange}
            />
          </Form.Group>
        </Col>
        <Col md="4">
          <Form.Group>
            <Form.Select name="parentId" onChange={handleOnChange}>
              <option value="">Select Parent Category</option>
              {categories.length > 0 &&
                categories.map(
                  (item) =>
                    !item.parentId && (
                      <option value={item._id}>{item.name}</option>
                    )
                )}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md="4">
          <Form.Group>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              name="name"
              placeholder="Enter category name"
              required
            />
          </Form.Group>
        </Col>
        <Col md="2">
          <Form.Group>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default AddCatForm;
