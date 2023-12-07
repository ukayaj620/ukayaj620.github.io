const sourceData = [
  {
    name: "John Smith",
    gender: "Male",
    parent_name: "Michael Smith",
    parent_phone: "123-456-7890",
  },
  {
    name: "Emily Johnson",
    gender: "Female",
    parent_name: "Jessica Johnson",
    parent_phone: "234-567-8901",
  },
  {
    name: "Daniel Wilson",
    gender: "Male",
    parent_name: "Jennifer Wilson",
    parent_phone: "345-678-9012",
  },
  {
    name: "Sophia Davis",
    gender: "Female",
    parent_name: "Matthew Davis",
    parent_phone: "456-789-0123",
  },
  {
    name: "Ethan Miller",
    gender: "Male",
    parent_name: "Olivia Miller",
    parent_phone: "567-890-1234",
  },
  {
    name: "Isabella Taylor",
    gender: "Female",
    parent_name: "William Taylor",
    parent_phone: "678-901-2345",
  },
  {
    name: "Mason Brown",
    gender: "Male",
    parent_name: "Sophia Brown",
    parent_phone: "789-012-3456",
  },
  {
    name: "Ava Martinez",
    gender: "Female",
    parent_name: "Daniel Martinez",
    parent_phone: "890-123-4567",
  },
  {
    name: "Liam Anderson",
    gender: "Male",
    parent_name: "Ava Anderson",
    parent_phone: "901-234-5678",
  },
  {
    name: "Olivia White",
    gender: "Female",
    parent_name: "Jacob White",
    parent_phone: "012-345-6789",
  },
  {
    name: "Carter Lee",
    gender: "Male",
    parent_name: "Emily Lee",
    parent_phone: "123-456-7890",
  },
  {
    name: "Emma Harris",
    gender: "Female",
    parent_name: "Benjamin Harris",
    parent_phone: "234-567-8901",
  },
  {
    name: "Alexander Turner",
    gender: "Male",
    parent_name: "Grace Turner",
    parent_phone: "345-678-9012",
  },
  {
    name: "Grace Baker",
    gender: "Female",
    parent_name: "Nathan Baker",
    parent_phone: "456-789-0123",
  },
  {
    name: "Logan Cooper",
    gender: "Male",
    parent_name: "Ella Cooper",
    parent_phone: "567-890-1234",
  },
  {
    name: "Aria Young",
    gender: "Female",
    parent_name: "Andrew Young",
    parent_phone: "678-901-2345",
  },
  {
    name: "Lucas King",
    gender: "Male",
    parent_name: "Madison King",
    parent_phone: "789-012-3456",
  },
  {
    name: "Chloe Ward",
    gender: "Female",
    parent_name: "Christopher Ward",
    parent_phone: "890-123-4567",
  },
  {
    name: "Jackson Myers",
    gender: "Male",
    parent_name: "Avery Myers",
    parent_phone: "901-234-5678",
  },
  {
    name: "Madison Hill",
    gender: "Female",
    parent_name: "Henry Hill",
    parent_phone: "012-345-6789",
  },
  {
    name: "Leo Foster",
    gender: "Male",
    parent_name: "Lily Foster",
    parent_phone: "123-456-7890",
  },
  {
    name: "Stella Price",
    gender: "Female",
    parent_name: "Leo Price",
    parent_phone: "234-567-8901",
  },
  {
    name: "Caleb Green",
    gender: "Male",
    parent_name: "Natalie Green",
    parent_phone: "345-678-9012",
  },
  {
    name: "Mia Scott",
    gender: "Female",
    parent_name: "Isaac Scott",
    parent_phone: "456-789-0123",
  },
  {
    name: "Julian Murphy",
    gender: "Male",
    parent_name: "Evelyn Murphy",
    parent_phone: "567-890-1234",
  },
  {
    name: "Layla Carter",
    gender: "Female",
    parent_name: "Adam Carter",
    parent_phone: "678-901-2345",
  },
  {
    name: "Wyatt Perry",
    gender: "Male",
    parent_name: "Zoe Perry",
    parent_phone: "789-012-3456",
  },
  {
    name: "Aubrey Sanders",
    gender: "Female",
    parent_name: "Gavin Sanders",
    parent_phone: "890-123-4567",
  },
  {
    name: "Owen Reed",
    gender: "Male",
    parent_name: "Penelope Reed",
    parent_phone: "901-234-5678",
  },
  {
    name: "Hannah Ward",
    gender: "Female",
    parent_name: "Eli Ward",
    parent_phone: "012-345-6789",
  },
  {
    name: "Gabriel Bennett",
    gender: "Male",
    parent_name: "Addison Bennett",
    parent_phone: "123-456-7890",
  },
  {
    name: "Lily Roberts",
    gender: "Female",
    parent_name: "Carter Roberts",
    parent_phone: "234-567-8901",
  },
  {
    name: "Elijah Turner",
    gender: "Male",
    parent_name: "Scarlett Turner",
    parent_phone: "345-678-9012",
  },
  {
    name: "Scarlett Fox",
    gender: "Female",
    parent_name: "Gabriel Fox",
    parent_phone: "456-789-0123",
  },
  {
    name: "Nicholas Hall",
    gender: "Male",
    parent_name: "Nora Hall",
    parent_phone: "567-890-1234",
  },
  {
    name: "Amelia Ross",
    gender: "Female",
    parent_name: "Ethan Ross",
    parent_phone: "678-901-2345",
  },
  {
    name: "Miles Cooper",
    gender: "Male",
    parent_name: "Aria Cooper",
    parent_phone: "789-012-3456",
  },
  {
    name: "Harper Hayes",
    gender: "Female",
    parent_name: "Liam Hayes",
    parent_phone: "890-123-4567",
  },
  {
    name: "Nathan Hughes",
    gender: "Male",
    parent_name: "Sophie Hughes",
    parent_phone: "901-234-5678",
  },
  {
    name: "Avery Simmons",
    gender: "Female",
    parent_name: "Owen Simmons",
    parent_phone: "012-345-6789",
  },
];

const headers = [
  {
    title: "No",
    id: "no",
    sortable: false,
  },
  {
    title: "Full Name",
    id: "name",
    sortable: true,
    sortMode: "asc",
  },
  {
    title: "Gender",
    id: "gender",
    sortable: false,
  },
  {
    title: "Parent Name",
    id: "parent_name",
    sortable: true,
    sortMode: "asc",
  },
  {
    title: "Contact Phone",
    id: "parent_phone",
    sortable: false,
  },
];

const dataTableRef = document.getElementById("datatable");
const dataTableBodyRef = dataTableRef.querySelector("tbody");
const dataTableHeadRef = dataTableRef.querySelector("thead");
const formControlRef = document.getElementById("form-control");
const formControlSearchRef = document.getElementsByName("search")[0];
const pageSizeSelect = formControlRef.querySelector("[name=page]");
const formControlPageSizeRef = document.getElementsByName("page")[0];
const paginationControlPrevRef = document.getElementById("prev");
const paginationControlNextRef = document.getElementById("next");

let sortColumnName = "name";
let sortOrder = "asc";
let pageSize = 10;
let currentPage = 0;
let search = "";
let query = window.location.search;

function paginateData(data, pageSize, currentPage) {
  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data.slice(startIndex, endIndex);

  const hasNextPage = endIndex < data.length;
  const hasPreviousPage = startIndex > 0;

  return {
    data: paginatedData,
    hasNextPage: hasNextPage,
    hasPreviousPage: hasPreviousPage,
  };
}

function sortData(data, columnName, sortOrder) {
  const sortedData = [...data];

  sortedData.sort((a, b) => {
    const valueA = a[columnName];
    const valueB = b[columnName];

    if (sortOrder === "asc") {
      if (valueA < valueB) {
        return -1;
      } else if (valueA > valueB) {
        return 1;
      } else {
        return 0;
      }
    } else if (sortOrder === "desc") {
      if (valueA > valueB) {
        return -1;
      } else if (valueA < valueB) {
        return 1;
      } else {
        return 0;
      }
    }
  });

  return sortedData;
}

function sortTable(index, columnName, currentSortMode) {
  sortColumnName = columnName;
  sortOrder = currentSortMode === "asc" ? "desc" : "asc";

  headers[index].sortMode = sortOrder;

  updateTableHeader();
  updateTableContent();
}

function updateTableHeader() {
  dataTableHeadRef.innerHTML = "";

  let content = "<tr>";

  for (let i = 0; i < headers.length; i++) {
    if (headers[i].sortable) {
      content += `
        <th id="${headers[i].id}" onclick="sortTable(${i}, '${headers[i].id}', '${headers[i].sortMode}')">
          ${headers[i].title} (${headers[i].sortMode})
        </th>
        `;
    } else {
      content += `
        <th id="${headers[i].id}">
          ${headers[i].title}
        </th>
        `;
    }
  }
  content += "</tr>";

  dataTableHeadRef.innerHTML += content;
}

function updateTableContent() {
  const sortedData = sortData(sourceData, sortColumnName, sortOrder);
  const { data, hasNextPage, hasPreviousPage } = paginateData(
    sortedData,
    pageSize,
    currentPage
  );

  dataTableBodyRef.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    dataTableBodyRef.innerHTML += `
      <tr>
        <td>${currentPage * pageSize + i + 1}</td>
        <td>${data[i].name}</td>
        <td>${data[i].gender}</td>
        <td>${data[i].parent_name}</td>
        <td>${data[i].parent_phone}</td>
      </tr>
    `;
  }

  paginationControlNextRef.disabled = !hasNextPage;
  paginationControlPrevRef.disabled = !hasPreviousPage;
}

function redirectPage() {
  query = `page=${currentPage}&pageSize=${pageSize}&search=${search}`;
  window.location = `./index.html?${query}`;
}

function updateTable(redirect = true) {
  updateTableHeader();
  updateTableContent();

  if (redirect) {
    redirectPage();
  }
}

paginationControlNextRef.addEventListener("click", function (e) {
  currentPage += 1;
  updateTable();
});

paginationControlPrevRef.addEventListener("click", function (e) {
  currentPage -= 1;
  updateTable();
});

formControlRef.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(formControlRef);
  search = formData.get("search");

  updateTable();
});

formControlSearchRef.addEventListener("change", function (e) {
  // console.log("berubah bang search");
});

formControlPageSizeRef.addEventListener("change", function (e) {
  pageSize = Number(e.target.value);
  updateTable();
});

window.onload = function () {
  const searchParams = new URLSearchParams(window.location.search);

  currentPage = Number(searchParams.get("page"));
  search = searchParams.get("search");
  pageSize = Number(searchParams.get("pageSize"));

  formControlSearchRef.value = search;
  const pageSizeSelectedIndex = Array.from(pageSizeSelect.options).findIndex(
    function (option) {
      return Number(option.value) === pageSize;
    }
  );

  pageSizeSelect.selectedIndex = pageSizeSelectedIndex;

  updateTable(false);
};
