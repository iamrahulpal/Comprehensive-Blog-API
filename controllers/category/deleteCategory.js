const Category = require("../../models/categoryModel");

class deleteCategory {
  async checkCategory(id) {
    try {
      let category = await Category.findOne({ _id: id });

      if (!category) {
        throw "Category doesn't exists.";
      }

      return "";
    } catch (error) {
      throw error;
    }
  }
  process = async (req, res) => {
    try {
      let id = req.params.id;

      await this.checkCategory(id);

      const category = await Category.deleteOne({ _id: id });

      if (!category.deletedCount == 1) {
        throw "Failed to delete category.";
      }

      res.status(200).json({
        type: "Success",
        data: "Category has been deleted successfully",
      });
    } catch (error) {
      res.status(400).json({
        type: "Error",
        error: error.error || error,
      });
    }
  };
}

module.exports = new deleteCategory();
