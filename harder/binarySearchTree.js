// two classes Node and BST
// add method contains recursive function searchTree, which do all job
// it compares node.data with left and right and on the last item when it is null, it adds new
//

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(data){
        const node = this.root;
        if(node===null){
            this.root = new Node(data)
            return
        }
        const searchTree = (node)=>{
            if(data < node.data){
                if(node.left === null){
                    node.left = new Node(data)
                    return
                }else{
                    return searchTree(node.left)
                }
            }else if(data > node.data){
                if(node.right===null){
                    node.right = new Node(data)
                    return
                }else{
                    return searchTree(node.right)
                }
            }else{
                return
            }

        }
        return searchTree(node)
    }

    findMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    findMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    has(data) {
        let current = this.root;
        while (current) {
            if (data === current.data) {
                return true;
            }
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    remove(data) {
        const removeNode = function(node, data) {
            if (node == null) {
                return null;
            }
            if (data == node.data) {
                // node has no children
                if (node.left == null && node.right == null) {
                    return null;
                }
                // node has no left child
                if (node.left == null) {
                    return node.right;
                }
                // node has no right child
                if (node.right == null) {
                    return node.left;
                }
                // node has two children
                var tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }

    size(){
        const node = this.root
        let sizeHelper = (node)=>{
            if(node){
                return 1 + sizeHelper(node.left) + sizeHelper(node.right)
            }else{
                return 0
            }
        }
        return sizeHelper(node)
    }
}

const bst = new BST();
bst.add(1)
bst.add(2)
bst.add(3)
bst.add(4)
bst.add(5)
bst.add(6)
bst.add(7)
bst.add(8)
bst.add(9)
bst.add(10)
bst.remove(5)
console.log(bst.findMin())
console.log(bst.findMax())
console.log(bst.size())

import {test} from 'ava';
test(t => {
    t.is(1, 1);
})