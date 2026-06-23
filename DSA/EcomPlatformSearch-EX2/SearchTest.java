public class SearchTest {

  // Linear Search
  public static Product linearSearch(Product[] products, int targetId) {
    for (Product product : products) {
      if (product.productId == targetId) {
        return product;
      }
    }
    return null;
  }

  // Binary Search
  public static Product binarySearch(Product[] products, int targetId) {
    int left = 0;
    int right = products.length - 1;

    while (left <= right) {
      int mid = left + (right - left) / 2;

      if (products[mid].productId == targetId) {
        return products[mid];
      } else if (products[mid].productId < targetId) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return null;
  }

  public static void main(String[] args) {
    Product[] products = {
        new Product(101, "Laptop", "Electronics"),
        new Product(102, "Smartphone", "Electronics"),
        new Product(103, "Tablet", "Fashion"),
        new Product(104, "Headphones", "Accessories"),
        new Product(105, "Smartwatch", "Education")
    };

    int targetId = 103;

    Product res1 = linearSearch(products, targetId);

    if (res1 != null) {
      System.out.println("Linear Search Found: " + res1.productName);
    } else {
      System.out.println("Product not found using Linear Search");
    }

    Product res2 = binarySearch(products, targetId);

    if (res2 != null) {
      System.out.println("Binary Search Found: " + res2.productName);
    } else {
      System.out.println("Product not found using Binary Search");
    }
  }
}
