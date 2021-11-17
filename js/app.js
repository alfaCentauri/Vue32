
/** Componente select2. */
Vue.component("select2", {
    props: ["options", "value"],
    template: '#select2-template',
    mounted: function() {
        var vm = this;
        $(this.$el)
            // init select2
            .select2({ data: this.options })
            .val(this.value)
            .trigger("change")
            // emit event on change.
            .on("change", function() {
                vm.$emit("input", this.value);
            });
    },
    watch: {
        value: function(value) {
            // update value
            $(this.$el)
                .val(value)
                .trigger("change");
        },
        options: function(options) {
            // update options
            $(this.$el)
                .empty()
                .select2({ data: options });
        }
    },
    destroyed: function() {
        $(this.$el)
            .off()
            .select2("destroy");
    }
});

var vm = new Vue({
    el: "#vue-app",
    template: "#demo-template",
    data: {
        selected: 0,
        options: [
            { id: 1, text: "Perro" },
            { id: 2, text: "Gato" },
            { id: 3, text: "Raton" }
            ]
    }
});
