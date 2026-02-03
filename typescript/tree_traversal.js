const Node = function (value) {
    this.value = value;
    this.left = null;
    this.right = null;
};

const BinaryTree = function () {
    this.root = null;
};

BinaryTree.prototype.insert = function (value) {
    const newNode = new Node(value);

    if (!this.root) {
        this.root = newNode;
        return;
    }

    const queue = [this.root];

    while (queue.length) {
        const current = queue.shift();

        if (!current.left) {
            current.left = newNode; // attach here
            return; // placed successfully — we're done
        } else {
            queue.push(current.left);
        }

        if (!current.right) {
            current.right = newNode; // attach here
            return; // placed successfully — we're done
        } else {
            queue.push(current.right);
        }
    }
};

BinaryTree.prototype.goLeft = function () {};

const binaryTree = new BinaryTree();

const values = [3, 5, 3, 5, 4, 4, 8, 4, 1, 5, 8, 3, 10, 1, 4, 2, 3, 6, 1, 5];

values.forEach((v) => binaryTree.insert(v));

const tree = binaryTree.root;

// console.log(JSON.stringify(binaryTree, null, 2)); // pretty-print the structure

function preOrder(node) {
    if (!node?.value) {
        return;
    }
    console.log(node.value);
    preOrder(node.left);
    preOrder(node.right);
}

// preOrder(tree)

function inOrder(node) {
    if (!node?.value) {
        return;
    }
    inOrder(node.left);
    console.log(node.value);
    inOrder(node.right);
}

function postOrder(node) {
    if (!node?.value) {
        return;
    }
    inOrder(node.left);
    inOrder(node.right);
    console.log(node.value);
}

postOrder(tree);

function breathFirstSearch(head, v) {
    const queue = [head];

    while (queue.length) {
        const current = queue.shift();

        if (current.value === v) {
            return true;
        }

        if (current.left) {
            queue.push(current.left);
        }

        if (current.right) {
            queue.push(current.right);
        }
    }
    return false;
}
