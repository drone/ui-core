import Button from "../../src/components/button";
import Menu, { MenuItem } from "../../src/components/menu";
import Playground from "../../docs/playground";

# Default

The default form of a Menu.

<Playground
  scope={{ Menu, MenuItem, Button }}
  code={`() => (
    <Menu trigger="Project actions">
        <MenuItem>Create</MenuItem>
        <MenuItem>Update</MenuItem>
        <MenuItem>Delete</MenuItem>
    </Menu>
);`}
/>

Example Menu with selection events:

<Playground
  scope={{ Menu, MenuItem, Button }}
  code={`() => {
    const handleCreate = () => window.alert("create");
    const handleUpdate = () => window.alert("update");
    const handleDelete = () => window.alert("delete");
    return (
        <Menu trigger="Project actions">
            <MenuItem onSelect={handleCreate}>Create</MenuItem>
            <MenuItem onSelect={handleUpdate}>Update</MenuItem>
            <MenuItem onSelect={handleDelete}>Delete</MenuItem>
        </Menu>
    );
};`}
/>
