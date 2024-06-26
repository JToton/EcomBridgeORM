const router = require("express").Router();
const { Category, Product } = require("../../models");

// ? The `/api/categories` endpoints.

// *GET all categories.
router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// *GET a single category by id.
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!category) {
      res.status(404).json({ message: "No category found with this id" });
      return;
    }
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// *POST a new category.
router.post("/", async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json(err);
  }
});

// *PUT update a category by id.
router.put("/:id", async (req, res) => {
  try {
    const [rowsUpdated, [updatedCategory]] = await Category.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (rowsUpdated === 0) {
      res.status(404).json({ message: "No category found with this id" });
      return;
    }
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

// *DELETE a category by id.
router.delete("/:id", async (req, res) => {
  try {
    const rowsDeleted = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (rowsDeleted === 0) {
      res.status(404).json({ message: "No category found with this id" });
      return;
    }
    res.status(204).end();
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
