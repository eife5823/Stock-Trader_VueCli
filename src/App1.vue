<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a quote to delete it</div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/Quotes/QuoteGrid';
    import QuoteAdd from './components/Quotes/NewQuote';
    import Header from './components/Quotes/Header';
    export default {
        data: function () {
            return {
                quotes: ['Learning never exhausts the mind'],
                maxQuotes: 10
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: QuoteAdd,
            appHeader: Header
        },
        methods: {
            newQuote (quote) {
                this.quotes.push(quote);
                if (this.quotes.length >= this.maxQuotes) {
                    return alert('Please delete quotes first');
                }
            },
            deleteQuote (index) {
                this.quotes.splice(index, 1);
            }
        }
        
    }
</script>

<style>
</style>
