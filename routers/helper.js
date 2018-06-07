Array.prototype.contains = function(element) {
    return this.indexOf(element) > -1;
};
  
const resourceRoute = (router, resourceName, controller, exclusions) => {
  if (!exclusions.contains('findOne')) {
    router.get(`/${resourceName}/:id`, controller.findOne);
  }

  if (!exclusions.contains('findAll')) {
    router.get(`/${resourceName}`, controller.findAll);
  }

  if (!exclusions.contains('create')) {
    router.post(`/${resourceName}`, controller.create);
  }

  if (!exclusions.contains('update')) {
    router.put(`/${resourceName}/:id`, controller.update);
  }

  if (!exclusions.contains('delete')) {
    router.delete(`/${resourceName}/:id`, controller.delete);
  }
}

module.exports = { resourceRoute };