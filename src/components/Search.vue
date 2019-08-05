<template>
  <div id="search-wrapper">
    <form id="filters" class="ui form">
      <div class="filter">
        <label>House Type</label>
        <select class="ui fluid dropdown">
          <option value="4 bedroom">4 Bed Room</option>
          <option value="4 bedroom">4 Bed Room</option>
          <option value="4 bedroom">4 Bed Room</option>
        </select>
      </div>
      <div class="filter">
        <label>offer type</label>
        <select>
          <option value="for sale">For Sale</option>
        </select>
      </div>
      <div class="filter">
        <label>Select City</label>
        <select>
          <option value="accra">Accra</option>
        </select>
      </div>
      <div class="filter">
        <sui-button positive>search</sui-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "search"
};
</script>

<style scoped>
#search-wrapper {
  max-width: 40%;
  height: 80px;
  margin: 36% auto;
}

#filters {
  padding: 8px;
  border-radius: 2px;
  border: 3.5px solid #fafafa;
  background-color: #fff;
  display: flex;
  justify-content: center;
}

.filter {
  display: flex;
  flex-direction: column;
  margin: 10px;
  text-transform: capitalize;
  color: #000;
}

.filter label {
  margin-bottom: 12px;
  font-size: 1.25em;
}

.filter:last-of-type {
  align-self: flex-end;
}

@media only screen and (max-width: 768px) {
  #search-wrapper {
    margin-top: 20%;
    max-width: 80%;
  }
}
@media only screen and (max-width: 375px) {
  #search-wrapper {
    margin-top: 35% !important;
  }
}

@media only screen and (max-width: 600px) {
  #search-wrapper {
    margin-top: 30%;
  }

  #filters {
    flex-direction: column;
  }

  .filter:last-of-type {
    align-self: center;
  }
}
</style>
