import { IconCheck, IconEdit, IconX } from "@tabler/icons";
import { useEffect, useState } from "react";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";
import "../global.css";

export default function Todo() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(JSON.parse(window.localStorage.getItem("tasks") ?? []));
  const [view, setView] = useState("All");
  const [el, setEl] = useState("");
  const [edit, setEdit] = useState("");
  const [now, setNow] = useState("Tambah");

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleAddTask(e) {
    e.preventDefault();
    if (edit !== "") {
      let editTasks = [{ id: edit.id, name: newTask, completed: edit.completed }];
      tasks.forEach((task) => {
        if (task.id !== edit.id) {
          editTasks.push(task);
        }
      });

      setTasks(editTasks);
      setEdit("");
      setNow("Tambah");

      // window.scrollTo({
      //   top:
      // })
    } else {
      setTasks((prevTask) => [
        ...prevTask,
        {
          id: Math.floor(Math.random() * Date.now()),
          name: newTask,
          completed: false,
        },
      ]);
    }
    setNewTask("");
  }

  function handleCompleteTask(id) {
    const updateTask = tasks.map((task) => {
      if (id === task.id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });

    setTasks(updateTask);
  }

  function handleRemoveTask(id) {
    const removeTask = tasks.filter((task) => task.id !== id);
    setTasks(removeTask);
  }

  const handleSelect = (type, e) => {
    setView(type);
    const button = Array.from(document.getElementsByClassName("button"));
    button.forEach((btn) => {
      if (btn.classList.contains(e)) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  };

  const handleEdit = (e) => {
    setNow("Ubah");
    window.scrollTo({
      top: "0",
      left: "0",
      behavior: "smooth",
    });
    setEdit(e);
    setNewTask(e.name);
    // console.log(e);
  };
  return (
    <Card>
      <Card.Title>Todo List</Card.Title>
      <Card.Body>
        <form>
          <div className="flex items-center gap-x-2">
            <Input
              isFocused={true}
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            ></Input>
            <Button text={now + " Tugas"} onClick={handleAddTask}></Button>
          </div>
        </form>
        {tasks.length > 0 ? (
          <ol className="space-y-2 mt-4">
            {view === "All"
              ? tasks.map((task) => (
                  <li key={task.id} className="flex items-center justify-between">
                    <span className="flex">
                      <IconEdit className="cursor-pointer" onClick={() => handleEdit(task)} />
                      {task.name}{" "}
                      {task.completed ? (
                        <IconCheck className="text-lime-500"></IconCheck>
                      ) : (
                        <IconX className="text-red-500"></IconX>
                      )}
                    </span>
                    <div className="flex items-center gap-x-2">
                      <button
                        onClick={() => handleCompleteTask(task.id)}
                        className="px-2 py-1 border text-xs rounded"
                      >
                        Tandai {task.completed ? "Belum Selesai" : "Selesai"}
                      </button>
                      <button
                        onClick={() => handleRemoveTask(task.id)}
                        className="px-2 py-1 border text-xs rounded"
                      >
                        Hapus
                      </button>
                    </div>
                  </li>
                ))
              : tasks
                  .filter((task) => task.completed === view)
                  .map((task) => (
                    <li key={task.id} className="flex items-center justify-between">
                      <span className="flex">
                        <IconEdit className="cursor-pointer" onClick={() => handleEdit(task)} />
                        {task.name}{" "}
                        {task.completed ? (
                          <IconCheck className="text-lime-500"></IconCheck>
                        ) : (
                          <IconX className="text-red-500"></IconX>
                        )}
                      </span>
                      <div className="flex items-center gap-x-2">
                        <button
                          onClick={() => handleCompleteTask(task.id)}
                          className="px-2 py-1 border text-xs"
                        >
                          Tandai {task.completed ? "Belum Selesai" : "Selesai"}
                        </button>
                        <button
                          onClick={() => handleRemoveTask(task.id)}
                          className="px-2 py-1 border text-xs"
                        >
                          Hapus
                        </button>
                      </div>
                    </li>
                  ))}
          </ol>
        ) : null}
      </Card.Body>
      <Card.Footer>
        <button className="button active 0" onClick={(e) => handleSelect("All", 0)}>
          Semua
        </button>
        <button className="button 1" onClick={(e) => handleSelect(false, 1)}>
          Belum Selesai
        </button>
        <button className="button 2" onClick={(e) => handleSelect(true, 2)}>
          Selesai
        </button>
      </Card.Footer>
    </Card>
  );
}
