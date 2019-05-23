var ProductsList = React.createClass({
  displayName: "ProductsList",

  propTypes: {
    products: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.string.isRequired,
        src: React.PropTypes.string.isRequired,
        count: React.PropTypes.number.isRequired
      })
    ),
    shopName: React.PropTypes.string.isRequired
  },

  render: function() {
    const { shopName } = this.props;
    let productsList = [];
    this.props.products.map(function(item) {
      const { id, name, price, count, src } = item;
      productsList.push(
        React.DOM.div({ className: "product", key: id },
          React.DOM.div({ className: "product-photo-wrap" },
            React.DOM.img({ className: "product-photo", src: src, alt: name })),
          React.DOM.h3({ className: "product-name" }, name),
          React.DOM.div({ className: "product-info" },
            React.DOM.span({ className: "product-price" }, price),
            React.DOM.span({ className: "product-count" }, `count: ${count}`))));
    });

    return React.DOM.div(
      { className: "shop" },
      React.DOM.h2({ className: "products-title" }, shopName),
      React.DOM.div({ className: "product-list" }, productsList)
    );
  }
});
